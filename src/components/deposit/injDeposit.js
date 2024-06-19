import { toast } from 'react-toastify';

export async function depositINJ({ 
  supabase, 
  deposit_inj, 
  user, 
  setLoading, 
  setOpenINJ,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_inj,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenINJ(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
