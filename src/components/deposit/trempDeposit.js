import { toast } from 'react-toastify';

export async function depositTremp({ 
  supabase, 
  deposit_tremp, 
  user, 
  setLoading, 
  setOpenTremp,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_tremp,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenTremp(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}

