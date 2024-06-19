import { toast } from 'react-toastify';

export async function depositHugh({ 
  supabase, 
  deposit_hugh, 
  user, 
  setLoading, 
  setOpenHugh,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_hugh,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenHugh(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
