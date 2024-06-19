import { toast } from 'react-toastify';

export async function depositTnsr({ 
  supabase, 
  deposit_tnsr, 
  user, 
  setLoading, 
  setOpenTnsr,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_tnsr,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenTnsr(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
