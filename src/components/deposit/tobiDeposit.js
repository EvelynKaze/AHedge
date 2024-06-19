import { toast } from 'react-toastify';

export async function depositTobi({ 
  supabase, 
  deposit_tobi, 
  user, 
  setLoading, 
  setOpenTobi,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_tobi,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenTobi(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
