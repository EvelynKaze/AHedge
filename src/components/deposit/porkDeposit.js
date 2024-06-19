import { toast } from 'react-toastify';

export async function depositPork({ 
  supabase, 
  deposit_pork, 
  user, 
  setLoading, 
  setOpenPork,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_pork,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenPork(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
