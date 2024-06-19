import { toast } from 'react-toastify';

export async function depositTRX({ 
  supabase, 
  deposit_trx, 
  user, 
  setLoading, 
  setOpenTRX,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_trx,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenTRX(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
