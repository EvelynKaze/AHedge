import { toast } from 'react-toastify';

export async function depositADA({ 
  supabase, 
  deposit_ada, 
  user, 
  setLoading, 
  setOpenADA,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_ada,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenADA(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
