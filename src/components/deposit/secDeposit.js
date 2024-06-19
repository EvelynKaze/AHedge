import { toast } from 'react-toastify';

export async function depositSec({ 
  supabase, 
  deposit_sec, 
  user, 
  setLoading, 
  setOpenSec,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_sec,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenSec(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
