'use client';

import React, { useState } from 'react';

// ============ DỮ LIỆU TIPS ============
const tips = [
  {
    id: 1,
    tieuDe: 'Cách quản lý thời gian hiệu quả',
    noiDung:
      'Sử dụng phương pháp Pomodoro: làm việc 25 phút, nghỉ 5 phút. Giúp tăng sự tập trung và tránh kiệt sức.',
  },
  {
    id: 2,
    tieuDe: 'Mẹo viết email chuyên nghiệp',
    noiDung:
      'Luôn có tiêu đề rõ ràng, mở đầu bằng lời chào, nội dung ngắn gọn theo gạch đầu dòng, và kết thúc bằng lời cảm ơn.',
  },
  {
    id: 3,
    tieuDe: 'Cách tổ chức file trên Google Drive',
    noiDung:
      'Tạo thư mục theo dự án, đặt tên file theo format: [YYYY-MM-DD]_TenFile_Version. Giúp dễ tìm kiếm và quản lý phiên bản.',
  },
];

// ============ DỮ LIỆU CÔNG CỤ ============
const congCu = [
  {
    id: 1,
    ten: 'Draw.io',
    gioiThieu:
      'Draw.io là nền tảng vẽ biểu đồ tư duy miễn phí. Các bạn có thể sử dụng app Draw.io bằng cách download về máy hoặc vẽ trực tiếp trên nền tảng web trực tuyến. Công cụ có thiết kế giao diện tối giản và khá dễ hiểu nên các bạn có thể vừa dùng vừa khám phá dần.',
    huongDan: [
      'Bước 1: Truy cập notion.so và đăng ký tài khoản bằng email nhóm.',
      'Bước 2: Tham gia workspace "Article Hungers" qua link mời được gửi trong email.',
      'Bước 3: Tạo trang cá nhân trong thư mục "Members" để ghi chú riêng.',
      'Bước 4: Sử dụng template có sẵn trong thư mục "Templates" để bắt đầu nhanh.',
    ],
  },
  {
    id: 2,
    ten: 'Trello',
    gioiThieu:
      'Trello là công cụ quản lý công việc dạng bảng Kanban. Giúp cả nhóm theo dõi ai đang làm gì, việc nào cần ưu tiên.',
    huongDan: [
      'Bước 1: Truy cập trello.com và đăng nhập.',
      'Bước 2: Vào board "Article Hungers Tasks" được chia sẻ.',
      'Bước 3: Kéo thẻ công việc từ cột "To Do" sang "Doing" khi bắt đầu làm.',
      'Bước 4: Di chuyển sang "Done" khi hoàn thành và ghi chú kết quả.',
    ],
  },
  {
    id: 3,
    ten: 'Google Meet',
    gioiThieu:
      'Google Meet là công cụ họp trực tuyến miễn phí, tích hợp sẵn với tài khoản Google của nhóm.',
    huongDan: [
      'Bước 1: Mở Google Calendar và tạo sự kiện họp mới.',
      'Bước 2: Thêm link Google Meet vào sự kiện và mời thành viên qua email.',
      'Bước 3: Vào phòng họp đúng giờ, bật camera và mic khi phát biểu.',
      'Bước 4: Sử dụng tính năng "Share Screen" khi cần trình bày.',
    ],
  },
];

export default function Home() {
  const [tipDangMo, setTipDangMo] = useState<number | null>(null);
  const [congCuDangMo, setCongCuDangMo] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* 1. Header - Đã bỏ chữ "Giới thiệu" */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">Article Hungers</h1>
          <nav className="space-x-6 text-sm font-medium text-gray-600">
            <a href="#tips" className="hover:text-blue-700">
              Tips
            </a>
            <a href="#cong-cu" className="hover:text-blue-700">
              Công cụ
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10 space-y-12">
        {/* 2. Giới thiệu (vẫn giữ nguyên) */}
        <section id="gioi-thieu" className="text-center space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">HELLOOO</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Đây là trang thông tin chính thức của nhóm. Nơi cập nhật các công
            cụ, tips hỗ trợ công việc nghiên cứu cho các bạn.
          </p>
        </section>

        {/* 3. TIPS */}
        <section id="tips" className="scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-green-600 pl-3">
            💡 Tips hữu ích
          </h3>
          <div className="space-y-3">
            {tips.map((tip) => (
              <div
                key={tip.id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() =>
                    setTipDangMo(tipDangMo === tip.id ? null : tip.id)
                  }
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900">
                    {tip.tieuDe}
                  </span>
                  <span className="text-gray-500 text-xl">
                    {tipDangMo === tip.id ? '−' : '+'}
                  </span>
                </button>
                {tipDangMo === tip.id && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {tip.noiDung}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 4. CÔNG CỤ HỖ TRỢ */}
        <section id="cong-cu" className="scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-purple-600 pl-3">
            🛠️ Công cụ hỗ trợ
          </h3>
          <div className="space-y-3">
            {congCu.map((tool) => (
              <div
                key={tool.id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() =>
                    setCongCuDangMo(congCuDangMo === tool.id ? null : tool.id)
                  }
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900 text-lg">
                    {tool.ten}
                  </span>
                  <span className="text-gray-500 text-xl">
                    {congCuDangMo === tool.id ? '−' : '+'}
                  </span>
                </button>
                {congCuDangMo === tool.id && (
                  <div className="px-6 pb-5 border-t border-gray-100 pt-4 space-y-4">
                    <div>
                      <h5 className="font-semibold text-purple-700 mb-1">
                        📌 Giới thiệu:
                      </h5>
                      <p className="text-gray-600 leading-relaxed">
                        {tool.gioiThieu}
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-purple-700 mb-2">
                        📖 Hướng dẫn sử dụng:
                      </h5>
                      <ol className="space-y-2">
                        {tool.huongDan.map((buoc, index) => (
                          <li
                            key={index}
                            className="text-gray-600 leading-relaxed pl-2"
                          >
                            {buoc}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 mt-12 text-center text-sm">
        <p>© 2026 Article Hungers. Chỉ sử dụng trong nội bộ.</p>
      </footer>
    </div>
  );
}
