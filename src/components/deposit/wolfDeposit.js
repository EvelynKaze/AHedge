import { toast } from 'react-toastify';

export async function depositWolf({ 
  supabase, 
  deposit_wolf, 
  user, 
  setLoading, 
  setOpenWolf,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_wolf,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenWolf(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
