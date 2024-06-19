import { toast } from 'react-toastify';

export async function depositHobbes({ 
  supabase, 
  deposit_hobbes, 
  user, 
  setLoading, 
  setOpenHobbes,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_hobbes,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenHobbes(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
