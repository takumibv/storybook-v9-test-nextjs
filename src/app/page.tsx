import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Hello World</h1>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium mb-2">
            ユーザ名
          </label>
          <Input 
            id="username"
            type="text"
            placeholder="ユーザ名" 
          />
        </div>
        
        <Button className="w-full">
          登録
        </Button>
      </div>
    </div>
  );
}
