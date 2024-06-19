import { toast } from 'react-toastify';

export async function depositDOGE({ 
  supabase, 
  deposit_doge, 
  user, 
  setLoading, 
  setOpenDOGE,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_doge,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenDOGE(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
