import { toast } from 'react-toastify';

export async function depositUSDT({ 
  supabase, 
  deposit_usdt, 
  user, 
  setLoading, 
  setOpenUSDT,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_usdt,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenUSDT(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}

