import React, { useState } from 'react';
import { Plus, Check, Info, Sparkles, Filter } from 'lucide-react';
import { MenuItem, MenuCategory } from '../types';
import { MENU_ITEMS } from '../data/menuData';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem, specialNote?: string) => void;
  onSelectDish: (item: MenuItem) => void;
  cartItemIds: string[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  onSelectDish,
  cartItemIds,
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('entradas');
  const [selectedTag, setSelectedTag] = useState<string>('todos');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const categories: { key: MenuCategory; label: string }[] = [
    { key: 'entradas', label: 'Entradas' },
    { key: 'fuertes', label: 'Platos Fuertes' },
    { key: 'postres', label: 'Postres' },
    { key: 'bebidas', label: 'Bebidas' },
    { key: 'todos', label: 'Todos los Platos' },
  ];

  const availableTags = ['todos', 'Sin Gluten', 'Vegetariano', 'Especial de la Casa'];

  const handleAddWithFeedback = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    onAddToCart(item);
    setJustAddedId(item.id);
    setTimeout(() => {
      setJustAddedId((prev) => (prev === item.id ? null : prev));
    }, 1500);
  };

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      activeCategory === 'todos' ? true : item.category === activeCategory;
    const matchesTag =
      selectedTag === 'todos'
        ? true
        : selectedTag === 'Especial de la Casa'
        ? item.featured === true
        : item.tags?.includes(selectedTag);
    return matchesCategory && matchesTag;
  });

  return (
    <section id="menu" className="py-16 bg-[#fcf9f8] px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="font-headline-lg text-3xl md:text-4xl text-[#0f5238] mb-2 font-bold">
            Nuestro Menú
          </h2>
          <p className="font-body-md text-sm md:text-base text-[#404943] max-w-xl mx-auto">
            Recetas tradicionales cubanas elaboradas a diario con ingredientes frescos y el toque
            inconfundible de casa.
          </p>
        </div>

        {/* Category Tabs matching HTML prompt exactly */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`menu-tab px-6 py-2 rounded-full border border-[#0f5238] font-label-sm text-xs md:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[#0f5238] text-white shadow-sm scale-105'
                    : 'text-[#0f5238] hover:bg-[#2d6a4f]/10'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dietary / Specialty Tag Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 text-xs">
          <span className="text-[#404943] flex items-center gap-1 font-medium mr-1">
            <Filter className="w-3.5 h-3.5" /> Filtrar por:
          </span>
          {availableTags.map((tag) => {
            const isTagActive = selectedTag === tag;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-md transition-colors ${
                  isTagActive
                    ? 'bg-[#a33d23] text-white font-semibold shadow-xs'
                    : 'bg-[#f0eded] text-[#404943] hover:bg-[#eae7e7]'
                }`}
              >
                {tag === 'todos' ? 'Todas las especialidades' : tag}
              </button>
            );
          })}
        </div>

        {/* Grid of Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isAdded = justAddedId === item.id || cartItemIds.includes(item.id);

            return (
              <div
                key={item.id}
                onClick={() => onSelectDish(item)}
                className="bg-white rounded-lg shadow-sm hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer flex flex-col justify-between border border-[#bfc9c1]/20"
              >
                <div>
                  {/* Image container */}
                  <div className="relative h-52 overflow-hidden bg-[#eae7e7]">
                    <img
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.imageUrl}
                      loading="lazy"
                    />

                    {/* Featured Badge */}
                    {item.featured && (
                      <span className="absolute top-3 left-3 bg-[#0f5238]/90 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3 h-3 text-[#ffb4a2]" />
                        Especialidad
                      </span>
                    )}

                    {/* Quick detail hover badge */}
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[#1c1b1b] p-1.5 rounded-full shadow-sm opacity-80 group-hover:opacity-100 transition-opacity">
                      <Info className="w-4 h-4 text-[#0f5238]" />
                    </div>
                  </div>

                  {/* Content area */}
                  <div className="p-6 pb-4">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-headline-md text-xl font-bold text-[#1c1b1b] group-hover:text-[#0f5238] transition-colors">
                        {item.name}
                      </h3>
                    </div>

                    <p className="font-body-md text-sm text-[#404943] mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Tags pill list */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {item.tags.map((t, idx) => (
                          <span
                            key={idx}
                            className="inline-block text-[10px] font-medium px-2 py-0.5 rounded bg-[#f6f3f2] text-[#404943] border border-[#bfc9c1]/30"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer price & Order button */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#f0eded]/80">
                  <span className="font-label-price text-lg font-bold text-[#a33d23]">
                    ${item.price.toFixed(2)}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleAddWithFeedback(e, item)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-label-sm text-xs font-semibold transition-all shadow-xs ${
                        isAdded
                          ? 'bg-[#0f5238] text-white'
                          : 'bg-[#f0eded] text-[#0f5238] hover:bg-[#0f5238] hover:text-white'
                      }`}
                      aria-label={`Agregar ${item.name} al pedido`}
                    >
                      {justAddedId === item.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#b1f0ce]" />
                          ¡Agregado!
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          Pedir
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-xl border border-[#bfc9c1]/30">
            <p className="text-[#404943] mb-4">No se encontraron platos con ese filtro.</p>
            <button
              onClick={() => {
                setActiveCategory('todos');
                setSelectedTag('todos');
              }}
              className="px-4 py-2 bg-[#0f5238] text-white rounded-lg text-sm"
            >
              Ver todo el menú
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
