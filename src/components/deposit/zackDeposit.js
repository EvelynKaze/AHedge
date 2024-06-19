import { toast } from 'react-toastify';

export async function depositZack({ 
  supabase, 
  deposit_zack, 
  user, 
  setLoading, 
  setOpenZack,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_zack,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenZack(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
