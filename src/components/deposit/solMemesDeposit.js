import { toast } from 'react-toastify';

export async function depositSolMemes({ 
  supabase, 
  deposit_solMemes, 
  user, 
  setLoading, 
  setOpenSolMemes,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_solMemes,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenSolMemes(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
