import { toast } from 'react-toastify';

export async function depositOnecat({ 
  supabase, 
  deposit_Onecat, 
  user, 
  setLoading, 
  setOpenOnecat,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_Onecat,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenOnecat(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
