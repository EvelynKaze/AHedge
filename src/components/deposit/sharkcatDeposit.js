import { toast } from 'react-toastify';

export async function depositSharkcat({ 
  supabase, 
  deposit_sharkcat, 
  user, 
  setLoading, 
  setOpenSharkcat,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_sharkcat,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenSharkcat(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
