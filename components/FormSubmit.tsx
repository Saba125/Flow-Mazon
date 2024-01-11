'use client'
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
interface FormSubmitButtonProps {
    children: React.ReactNode
}
const FormSubmitButton:React.FC<FormSubmitButtonProps> = ({children}) => {
    const {pending} = useFormStatus()
    return ( 
        <Button disabled={pending} type="submit">
                    {pending && <Loader2 size={16} className="animate-spin" />}

            {children}
        </Button>
     );
}
 
export default FormSubmitButton;