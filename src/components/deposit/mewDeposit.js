import { toast } from 'react-toastify';

export async function depositMew({ 
  supabase, 
  deposit_mew, 
  user, 
  setLoading, 
  setOpenMew,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_mew,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenMew(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
