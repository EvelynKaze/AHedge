import { toast } from 'react-toastify';

export async function depositBrett({ 
  supabase, 
  deposit_brett, 
  user, 
  setLoading, 
  setOpenBrett,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_brett,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenBrett(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
