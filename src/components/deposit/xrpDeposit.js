import { toast } from 'react-toastify';

export async function depositXRP({ 
  supabase, 
  deposit_xrp, 
  user, 
  setLoading, 
  setOpenXRP,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_xrp,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenXRP(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}

