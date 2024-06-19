import { toast } from 'react-toastify';

export async function depositStache({ 
  supabase, 
  deposit_stache, 
  user, 
  setLoading, 
  setOpenStache,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_stache,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenStache(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
