import { toast } from 'react-toastify';

export async function depositETH({ 
  supabase, 
  deposit_eth, 
  user, 
  setLoading, 
  setOpenETH,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_eth,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenETH(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
