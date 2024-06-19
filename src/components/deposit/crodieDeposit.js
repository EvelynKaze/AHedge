import { toast } from 'react-toastify';

export async function depositCrodie({ 
  supabase, 
  deposit_crodie, 
  user, 
  setLoading, 
  setOpenCrodie,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_crodie,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenCrodie(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
