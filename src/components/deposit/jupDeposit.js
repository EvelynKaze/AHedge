import { toast } from 'react-toastify';

export async function depositJUP({ 
  supabase, 
  deposit_jup, 
  user, 
  setLoading, 
  setOpenJUP,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_jup,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenJUP(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
