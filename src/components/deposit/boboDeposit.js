import { toast } from 'react-toastify';

export async function depositBobo({ 
  supabase, 
  deposit_bobo, 
  user, 
  setLoading, 
  setOpenBobo,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_bobo,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenBobo(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
