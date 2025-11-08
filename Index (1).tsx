import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold">Food Ordering System</CardTitle>
          <CardDescription className="text-lg">
            Welcome! Choose your access type
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            className="w-full text-lg py-6" 
            onClick={() => navigate('/login')}
          >
            Customer Login
          </Button>
          <Button 
            className="w-full text-lg py-6" 
            variant="outline"
            onClick={() => navigate('/admin')}
          >
            Admin Dashboard
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
