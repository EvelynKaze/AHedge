import { toast } from 'react-toastify';

export async function depositDixi({ 
  supabase, 
  deposit_dixi, 
  user, 
  setLoading, 
  setOpenDixi,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_dixi,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenDixi(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
