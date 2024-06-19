import { toast } from 'react-toastify';

export async function depositDerp({ 
  supabase, 
  deposit_derp, 
  user, 
  setLoading, 
  setOpenDerp,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_derp,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenDerp(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
