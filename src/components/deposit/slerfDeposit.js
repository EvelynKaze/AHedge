import { toast } from 'react-toastify';

export async function depositSlerf({ 
  supabase, 
  deposit_slerf, 
  user, 
  setLoading, 
  setOpenSlerf,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_slerf,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenSlerf(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
