import { toast } from 'react-toastify';

export async function depositBTC({ 
  supabase, 
  deposit_btc, 
  user, 
  setLoading, 
  setOpenBTC,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_btc,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenBTC(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
