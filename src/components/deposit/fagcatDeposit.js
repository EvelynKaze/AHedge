import { toast } from 'react-toastify';

export async function depositFagcat({ 
  supabase, 
  deposit_fagcat, 
  user, 
  setLoading, 
  setOpenFagcat,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_fagcat,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenFagcat(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
