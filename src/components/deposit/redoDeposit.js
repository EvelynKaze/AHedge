import { toast } from 'react-toastify';

export async function depositRedo({ 
  supabase, 
  deposit_redo, 
  user, 
  setLoading, 
  setOpenRedo,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_redo,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenRedo(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
