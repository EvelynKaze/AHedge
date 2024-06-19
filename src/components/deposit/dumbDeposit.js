import { toast } from 'react-toastify';

export async function depositDumb({ 
  supabase, 
  deposit_dumb, 
  user, 
  setLoading, 
  setOpenDumb,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_dumb,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenDumb(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
