import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-dark">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-white">
              404 Page Not Found
            </h1>
          </div>

          <a href="/" className="mt-4 underline text-gray-600">
            Go back to homepage
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
