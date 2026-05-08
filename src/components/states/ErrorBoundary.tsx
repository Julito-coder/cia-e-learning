import { Component, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: unknown) {
    console.error('[ErrorBoundary]', error, info);
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  goHome = () => {
    window.location.href = '/';
  };

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-gradient-to-b from-background to-muted/30">
        <div className="w-full max-w-md text-center space-y-5">
          <div className="mx-auto h-20 w-20 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center">
            <AlertTriangle className="h-10 w-10" />
          </div>
          <div className="space-y-1">
            <h1 className="font-display text-2xl font-bold text-foreground">
              Oups… quelque chose a déraillé
            </h1>
            <p className="text-sm text-muted-foreground">
              Une erreur inattendue est survenue. Réessayez ou revenez à l'accueil.
            </p>
          </div>
          {this.state.error?.message && (
            <p className="text-[11px] text-muted-foreground bg-muted/50 rounded-lg p-3 font-mono break-words">
              {this.state.error.message}
            </p>
          )}
          <div className="flex gap-2 justify-center">
            <Button onClick={this.reset}>
              <RefreshCw className="h-4 w-4 mr-1.5" /> Réessayer
            </Button>
            <Button onClick={this.goHome} variant="outline">
              <Home className="h-4 w-4 mr-1.5" /> Accueil
            </Button>
          </div>
        </div>
      </div>
    );
  }
}