import { toast } from 'react-toastify';

export async function depositHot({ 
  supabase, 
  deposit_hot, 
  user, 
  setLoading, 
  setOpenHot,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_hot,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenHot(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
