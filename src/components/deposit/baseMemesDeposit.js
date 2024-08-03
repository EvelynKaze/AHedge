import { toast } from 'react-toastify';

export async function depositBaseMemes({ 
  supabase, 
  deposit_baseMemes, 
  user, 
  setLoading, 
  setOpenBaseMemes,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_baseMemes,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenBaseMemes(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
