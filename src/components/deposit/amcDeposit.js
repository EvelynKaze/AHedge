import { toast } from 'react-toastify';

export async function depositAmc({ 
  supabase, 
  deposit_amc, 
  user, 
  setLoading, 
  setOpenAmc,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_amc,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenAmc(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
