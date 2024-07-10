import { toast } from 'react-toastify';

export async function depositDot({ 
  supabase, 
  deposit_dot, 
  user, 
  setLoading, 
  setOpenDot,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_dot,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenDot(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
