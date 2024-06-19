import { toast } from 'react-toastify';

export async function depositXLM({ 
  supabase, 
  deposit_xlm, 
  user, 
  setLoading, 
  setOpenXLM,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_xlm,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenXLM(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
