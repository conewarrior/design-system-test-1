import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout } from './layouts/AdminLayout';
import { CategoryPage } from './pages/category/CategoryPage';
import { DecorationListPage } from './pages/decoration/DecorationListPage';
import { DecorationFormPage } from './pages/decoration/DecorationFormPage';
import { ProductListPage } from './pages/product/ProductListPage';
import { ProductDetailPage } from './pages/product/ProductDetailPage';
import { OrderListPage } from './pages/order/OrderListPage';
import { OrderDetailPage } from './pages/order/OrderDetailPage';
import { RefundPage } from './pages/order/RefundPage';
import { BannedKeywordPage } from './pages/banned-keyword/BannedKeywordPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/order" replace />} />
        <Route
          path="/*"
          element={
            <AdminLayout>
              <Routes>
                <Route path="/category" element={<CategoryPage />} />
                <Route path="/decoration" element={<DecorationListPage />} />
                <Route path="/decoration/create" element={<DecorationFormPage />} />
                <Route path="/decoration/:id" element={<DecorationFormPage />} />
                <Route path="/product" element={<ProductListPage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/order" element={<OrderListPage />} />
                <Route path="/order/:id" element={<OrderDetailPage />} />
                <Route path="/order/:id/refund" element={<RefundPage />} />
                <Route path="/banned-keyword" element={<BannedKeywordPage />} />
              </Routes>
            </AdminLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
