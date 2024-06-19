import { toast } from 'react-toastify';

export async function depositMother({ 
  supabase, 
  deposit_mother, 
  user, 
  setLoading, 
  setOpenMother,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_mother,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenMother(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
