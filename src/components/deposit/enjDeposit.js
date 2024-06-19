import { toast } from 'react-toastify';

export async function depositENJ({ 
  supabase, 
  deposit_enj, 
  user, 
  setLoading, 
  setOpenENJ,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_enj,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenENJ(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
