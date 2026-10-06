'use client';

import React, { useState } from 'react';

// ============ DỮ LIỆU TIPS ============
const tips = [
  {
    id: 1,
    tieuDe: 'Nên làm gì khi burnout?',
    link: 'https://docs.google.com/document/d/1oEpDibfOY_04RZ8Shc2EIYG2jNO8_MWt/edit?usp=sharing&ouid=112102543920577934774&rtpof=true&sd=true',
    tenLink: 'Academic Burnout',
  },
  {
    id: 2,
    tieuDe: 'Cách viết Literature Review',
    link: 'https://docs.google.com/document/d/1X2r9lXslGaOEMmWlIxqdoGdBpJD_khek/edit?usp=sharing&ouid=112102543920577934774&rtpof=true&sd=true',
    tenLink: 'Ten Simple Rules for Writing a Literature Review',
  },
  {
    id: 3,
    tieuDe: 't3',
    noiDung: 'Tạo thư mục theo dự án, đặt tên file theo format: [YYYY-MM-DD]_TenFile_Version. Giúp dễ tìm kiếm và quản lý phiên bản.',
  },
];

// ============ DỮ LIỆU CÔNG CỤ ============
const congCu = [
  {
    id: 1,
    ten: 'Draw.io',
    gioiThieu: 'Draw.io là nền tảng vẽ biểu đồ tư duy miễn phí. Các bạn có thể sử dụng app Draw.io bằng cách download về máy hoặc vẽ trực tiếp trên nền tảng web trực tuyến. Công cụ có thiết kế giao diện tối giản và khá dễ hiểu nên các bạn có thể vừa dùng vừa khám phá dần.',
    link: 'https://app.diagrams.net/',
    tenLink: 'Truy cập Draw.io',
    huongDan: [
      'Web: https://app.diagrams.net/',
      'HDSD: Các bạn có thể tìm trên youtube các video hướng dẫn nếu cần.',
    ],
  },
  {
    id: 2,
    ten: 'Inciteful',
    gioiThieu: `Inciteful là công cụ tìm kiếm và phân tích tài liệu học thuật dựa trên việc phân tích mạng lưới trích dẫn thay vì chỉ tìm kiếm theo từ khóa thông thường.

Tính năng chính:

- Paper Discovery: Tạo mạng lưới trích dẫn xung quanh bài báo gốc để tìm các bài viết tương tự, bài báo quan trọng nhất, cùng các tác giả và tổ chức nổi bật.

- Literature Connector: Nhập hai bài báo bất kỳ để hiển thị sơ đồ trực quan kết nối giữa hai lĩnh vực nghiên cứu.`,
    link: 'https://incitefulmed.com/academic/c',
    tenLink: 'Truy cập Inciteful',
    huongDan: [
      'Web: https://incitefulmed.com/academic/c',
      'Tính năng Paper Discovery: Sử dụng thanh search góc phải trên đầu trang',
      'Tính năng Literature Connector: Sử dụng thanh search from - to',
      'Giao diện khá trực quan và dễ sử dụng, hữu ích trong việc tìm paper, các bạn tìm hiểu nhé.',
    ],
  },
  {
    id: 3,
    ten: 'Các AI hỗ trợ nghiên cứu',
    gioiThieu: 'Trong công việc nghiên cứu rất cần sự hỗ trợ của các công cụ AI, các bạn nên tìm tòi và khai thác AI một cách tối ưu nhất.',
    link: 'https://docs.google.com/spreadsheets/d/18p3_qYOBCknZAuSiRdWbig7dPIMx_AyVe2jUJ4cDz_U/edit?usp=sharing',
    tenLink: 'AI nghiên cứu',
    huongDan: [
      'Đây là bảng tổng hợp các công cụ AI có thể dùng trong nghiên cứu. Các bạn hãy thử sử dụng và chọn ra các AI phù hợp nhất với bản thân nhé: https://docs.google.com/spreadsheets/d/18p3_qYOBCknZAuSiRdWbig7dPIMx_AyVe2jUJ4cDz_U/edit?usp=sharing',
    ],
  },
];

export default function Home() {
  const [tipDangMo, setTipDangMo] = useState<number | null>(null);
  const [congCuDangMo, setCongCuDangMo] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* 1. Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">Article Hungers</h1>
          <nav className="space-x-6 text-sm font-medium text-gray-600">
            <a href="#tips" className="hover:text-blue-700">Tips</a>
            <a href="#cong-cu" className="hover:text-blue-700">Công cụ</a>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10 space-y-12">
        {/* 2. Giới thiệu */}
        <section id="gioi-thieu" className="text-center space-y-4 scroll-mt-20">
          <h2 className="text-4xl font-bold text-gray-900">HELLOOO</h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Đây là trang thông tin chính thức của nhóm. Nơi cập nhật các công cụ, tips hỗ trợ công việc nghiên cứu cho các bạn.
          </p>
        </section>

        {/* 3. TIPS */}
        <section id="tips" className="scroll-mt-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-green-600 pl-3">
            💡 Tips hữu ích
          </h3>
          <div className="space-y-3">
            {tips.map((tip) => (
              <div key={tip.id} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <button
                  onClick={() => setTipDangMo(tipDangMo === tip.id ? null : tip.id)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900">{tip.tieuDe}</span>
                  <span className="text-gray-500 text-xl">{tipDangMo === tip.id ? '−' : '+'}</span>
                </button>
                {tipDangMo === tip.id && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {tip.noiDung && <p className="mb-2">{tip.noiDung}</p>}
                    {tip.link && tip.tenLink && (
                      <p>
                        Link bài đọc:{' '}
                        <a href={tip.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 font-medium">
                          {tip.tenLink}
                        </a>
                      </p>
                    )}
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
              <div key={tool.id} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <button
                  onClick={() => setCongCuDangMo(congCuDangMo === tool.id ? null : tool.id)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-gray-900 text-lg">{tool.ten}</span>
                  <span className="text-gray-500 text-xl">{congCuDangMo === tool.id ? '−' : '+'}</span>
                </button>
                {congCuDangMo === tool.id && (
                  <div className="px-6 pb-5 border-t border-gray-100 pt-4 space-y-4">
                    <div>
                      <h5 className="font-semibold text-purple-700 mb-1">📌 Giới thiệu:</h5>
                      <p className="text-gray-600 leading-relaxed whitespace-pre-line">{tool.gioiThieu}</p>
                      
                    </div>
                    <div>
                      <h5 className="font-semibold text-purple-700 mb-2">📖 Hướng dẫn sử dụng:</h5>
                      <ol className="space-y-2">
                        {tool.huongDan.map((buoc, index) => {
                          const urlMatch = buoc.match(/(https?:\/\/[^\s]+)/);

                          // Trường hợp 1: Có URL và có tên link riêng (ví dụ: AI nghiên cứu)
                          if (urlMatch && tool.tenLink) {
                            const textPart = buoc.replace(urlMatch[0], '').replace(/:\s*$/, '').trim();
                            return (
                              <li key={index} className="text-gray-600 leading-relaxed pl-2">
                                {textPart}: {' '}
                                <a href={urlMatch[0]} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800 font-medium">
                                  {tool.tenLink}
                                </a>
                              </li>
                            );
                          }

                          // Trường hợp 2: Có URL nhưng không có tên link riêng (hiển thị URL đầy đủ)
                          if (urlMatch) {
                            const parts = buoc.split(urlMatch[0]);
                            return (
                              <li key={index} className="text-gray-600 leading-relaxed pl-2">
                                {parts[0]}
                                <a href={urlMatch[0]} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                                  {urlMatch[0]}
                                </a>
                                {parts[1]}
                              </li>
                            );
                          }

                          // Trường hợp 3: Không có URL, hiển thị text thường
                          return (
                            <li key={index} className="text-gray-600 leading-relaxed pl-2">
                              {buoc}
                            </li>
                          );
                        })}
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