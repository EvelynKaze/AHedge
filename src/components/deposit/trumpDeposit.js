import { toast } from 'react-toastify';

export async function depositTrump({ 
  supabase, 
  deposit_trump, 
  user, 
  setLoading, 
  setOpenTrump,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_trump,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenTrump(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
