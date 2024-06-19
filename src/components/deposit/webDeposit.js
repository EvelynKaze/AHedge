import { toast } from 'react-toastify';

export async function depositWeb({ 
  supabase, 
  deposit_web, 
  user, 
  setLoading, 
  setOpenWeb,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_web,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenWeb(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
