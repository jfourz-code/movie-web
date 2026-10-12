import { AlertCircleIcon } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { useEffect, useState } from "react";

type ErrorAlertType = {
    isError : boolean;
}

const ErrorAlert = ({ isError } : ErrorAlertType) => {
    const [showAlert, setShowAlert] = useState(false);
    useEffect(() => {
        if (!isError) {
            setShowAlert(false);
            return;
        }

        const timer = setTimeout(() => {
            setShowAlert(true)
        }, 300)
        return () => clearTimeout(timer);
    }, [isError])

    if (!showAlert) return null; 

    return (
        <div className="flex justify-center items-center ">
            <div className="absolute top-25 z-10">
                {showAlert && 
                <Alert variant="destructive" className="max-w-sm">
                    <AlertCircleIcon />
                    <AlertTitle>Problem with the service.</AlertTitle>
                    <AlertDescription>
                        There is a problem with the service, try with refresh.
                    </AlertDescription>
                </Alert>
            }
            </div>
        </div>
    )
}

export default ErrorAlert;