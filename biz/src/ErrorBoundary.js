(function () {
window.AINOW = window.AINOW || {};
var __exports = AINOW['src/ErrorBoundary'] = AINOW['src/ErrorBoundary'] || {};
const { Component } = React;


const { RefreshCw, AlertTriangle } = lucide;

const html = htm.bind(React.createElement);

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
        this.setState({ errorInfo });
    }

    handleReset() {
        this.setState({ hasError: false, error: null, errorInfo: null });
        window.location.reload();
    }

    render() {
        if (this.state.hasError) {
            return html`
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-6 font-sans">
          <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700 p-8 text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <${AlertTriangle} className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-3">Something went wrong</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              Accept our apologies. The application encountered an unexpected error.
            </p>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl text-left mb-8 overflow-auto max-h-40 border border-slate-100 dark:border-slate-800">
               <code className="text-xs font-mono text-red-500 block mb-2 font-bold">${this.state.error?.toString()}</code>
               <pre className="text-[10px] text-slate-400 whitespace-pre-wrap">${this.state.errorInfo?.componentStack}</pre>
            </div>

            <button 
              onClick=${() => this.handleReset()}
              className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white rounded-2xl font-bold uppercase tracking-wider shadow-lg shadow-teal-200 dark:shadow-none transition-all flex items-center justify-center gap-2"
            >
              <${RefreshCw} className="w-4 h-4" />
              Reload Application
            </button>
          </div>
        </div>
      `;
        }

        return this.props.children;
    }
}
  __exports.ErrorBoundary = ErrorBoundary;
})();