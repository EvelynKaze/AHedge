import { toast } from 'react-toastify';

export async function depositWEN({ 
  supabase, 
  deposit_wen, 
  user, 
  setLoading, 
  setOpenWEN,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_wen,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenWEN(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
