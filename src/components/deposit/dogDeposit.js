import { toast } from 'react-toastify';

export async function depositDog({ 
  supabase, 
  deposit_dog, 
  user, 
  setLoading, 
  setOpenDog,
}) {

  try {
    setLoading(true);

    const updates = {
      id: user.id,
      deposit_dog,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from('profiles').upsert(updates);
    if (error) throw error;
    
    setOpenDog(false);
    toast.success("Transaction Order placed. Awaiting Approval.");
  } catch (error) {
    alert('Error updating the data!');
    console.log(error);
  } finally {
    setLoading(false);
  }
}
